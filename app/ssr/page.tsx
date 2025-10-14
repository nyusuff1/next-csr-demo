// app/users/page.tsx  ← pastikan file kamu pakai .tsx biar bisa pakai type
type User = {
  id: number;
  name: string;
  email: string;
};

export default async function UsersPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  // kasih tahu TypeScript bahwa hasil JSON-nya berupa User[]
  const users: User[] = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Daftar User (SSR)</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <strong>{u.name}</strong> — {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
