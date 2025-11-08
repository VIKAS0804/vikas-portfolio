import DeskTopContent from "@/components/desktop/desktop-content";

export default function Desktop() {
  const repos = fetch("https://api.github.com/users/VIKAS0804/repos").then(
    (response) => response.json()
  );
  return <DeskTopContent repos={repos} />;
}
