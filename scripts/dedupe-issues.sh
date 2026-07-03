#!/usr/bin/env bash
# Remove duplicate issues created by re-running create-issues.sh.
# Keeps the LOWEST-numbered issue for each unique title and deletes the rest.
# Prereq: gh auth login.  Run:  bash scripts/dedupe-issues.sh
set -euo pipefail
REPO="mayamit/Sable"

echo "Scanning open issues in $REPO ..."
# number<TAB>title, sorted ascending by number; awk prints the DUPES (title already seen).
DUPES="$(gh issue list --repo "$REPO" --state open --limit 500 --json number,title \
  | jq -r '.[] | "\(.number)\t\(.title)"' \
  | sort -n \
  | awk -F'\t' 'seen[$2]++ {print $1}')"

if [[ -z "$DUPES" ]]; then
  echo "No duplicates found. Nothing to do."
  exit 0
fi

COUNT="$(echo "$DUPES" | grep -c . || true)"
echo "Found $COUNT duplicate issue(s) to delete:"
echo "$DUPES" | tr '\n' ' '; echo
read -r -p "Delete these $COUNT issues? (y/N) " ok
[[ "$ok" == "y" || "$ok" == "Y" ]] || { echo "Aborted."; exit 0; }

while read -r n; do
  [[ -z "$n" ]] && continue
  echo "Deleting #$n"
  gh issue delete "$n" --repo "$REPO" --yes
done <<< "$DUPES"

echo "Done. Remaining:"
gh issue list --repo "$REPO" --state open --limit 100
