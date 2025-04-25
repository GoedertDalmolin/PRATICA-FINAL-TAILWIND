import { useState } from 'react';
import './tailwind.css';

export default function TailwindPage() {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  async function searchProfile() {
    if (!username.trim()) {
      alert("Informe pelo menos um perfil!");
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.status === 200) {
        const json = await response.json();
        setAvatarUrl(json.avatar_url || '');
        setName(json.name || '');
        setBio(json.bio || '');
      } else if (response.status === 404) {
        alert("Usuário não encontrado!");
      }
      setIsLoading(false);
    } catch (error) {
      alert("Ocorreu um erro!");
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#010409] flex items-center justify-center">
      <div className="flex flex-col items-center">
        <p className="mb-4 text-lg font-bold text-white">Tailwind Page</p>
        <div className="w-[300px] h-[400px] bg-[#0D1117] rounded-[50px] flex flex-col items-center p-4">
          {isLoading ? (
            <div className="flex items-center justify-center w-full h-full">
              <div className="border-4 border-[#d6dcd8] border-t-[#0d1117] rounded-full w-10 h-10 animate-spin"></div>
            </div>
          ) : (
            <>
              <div className="w-[100px] h-[100px] bg-[#D6DCD8] rounded-full flex items-center justify-center font-bold text-[#0D1117] text-sm">
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt="Avatar"
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <label>Foto de perfil</label>
                )}
              </div>

              <input
                type="text"
                value={name}
                placeholder="Nome"
                disabled
                className="mt-4 rounded-md bg-[#D6DCD8] border-none px-2 py-1 w-full text-sm"
              />

              <textarea
                value={bio}
                placeholder="Biografia"
                disabled
                className="mt-2 rounded-md bg-[#D6DCD8] border-none px-2 py-1 w-full h-[80px] resize-none text-sm"
              />

              <label className="mt-6 text-sm font-bold text-white">
                Informe um perfil do Github
              </label>
              <input
                className="mt-2 text-sm rounded-md bg-[#D6DCD8] border-none px-2 py-1 w-full"
                placeholder="GitHub"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <button
                className="mt-2 bg-[#D6DCD8] text-[#0D1117] font-bold py-2 px-4 rounded-md hover:bg-[#c2c8c3] transition"
                onClick={searchProfile}
              >
                Buscar
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
