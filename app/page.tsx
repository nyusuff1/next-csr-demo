'use client';
import { useEffect, useState } from "react";

// 1️⃣ Definisikan tipe User
type User = {
  id: number;
  name: string;
  email: string;
};

export default function UsersPage() {
  // 2️⃣ Tambahkan tipe pada useState
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading data...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Daftar User</h2>
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
