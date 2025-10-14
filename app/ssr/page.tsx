// app/users/page.jsx

export default async function UsersPage() {
  // Fetch dilakukan di server setiap kali ada request
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store", // pastikan SSR (tidak disimpan cache)
  });
  const users = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Daftar User (SSR)</h2>
      <ul>
        {users.map(u => (
          <li key={u.id}>
            <strong>{u.name}</strong> — {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
