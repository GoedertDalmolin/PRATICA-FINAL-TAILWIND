import { useState } from 'react';
import './CssPage.css';

export default function CssPage() {
    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [avatarUrl, setAvatarUrl] = useState('');
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');

    async function searchProfile() {
        try {
            if (!username.trim()) {
                alert("Informe pelo menos um perfil!");
                return;
            }

            setIsLoading(true);
            const response = await fetch(`https://api.github.com/users/${username}`);

            if (response.status == 200) {
                const json = await response.json();
                console.log(json)

                setAvatarUrl(json.avatar_url || '');
                setName(json.name || '');
                setBio(json.bio || '');
            } else if (response.status == 404) {
                alert("Usuário não encontrado!");
            }

            setIsLoading(false);
        } catch (error) {
            alert("Ocorreu um erro!");
            setIsLoading(false);
            console.error("Erro ao buscar os dados:", error);
        }
    }

    return (

        <div className="App">

            <header className="App-header">
                <div className="StyledComponentPage">
                    <p>Css Page</p>
                    <div className="card-borda">
                        {isLoading ? (
                            <div className="loader-container">
                                <div className="loader"></div>
                            </div>
                        ) : (
                            <>
                                <div className="user-profile-picture">
                                    {avatarUrl ? (
                                        <img src={avatarUrl} alt="Avatar do usuário" className="avatar-img" />
                                    ) : (
                                        <label>Foto de perfil</label>
                                    )}
                                </div>
                                <input
                                    className="user-name-input"
                                    value={name}
                                    placeholder="Nome"
                                    disabled
                                />
                                <textarea className="user-bio-input"
                                    value={bio}
                                    placeholder="Biografia"
                                    disabled
                                />
                                <label className="label-input-search-user"
                                >Informe um perfil do Github</label>
                                <input
                                    className="input-search-user"
                                    placeholder="GitHub"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <button
                                    className="button-search-user"
                                    onClick={searchProfile}>
                                    Buscar
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </header>
        </div>

    );
}
