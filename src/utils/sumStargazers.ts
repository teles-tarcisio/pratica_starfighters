export default function sumStargazers(userData: Object[]): number {
  const filteredStargazers = userData.map(item => (item["stargazers_count"])
  );

  const totalStargazers = filteredStargazers.reduce(
    (total, currentNumber) => (total + currentNumber)
  );
  return totalStargazers;
}