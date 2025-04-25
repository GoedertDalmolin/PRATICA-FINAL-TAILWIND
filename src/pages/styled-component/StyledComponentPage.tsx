import { useState } from 'react';
import {
  PageWrapper,
  Card,
  ProfilePicture,
  Avatar,
  Input,
  Textarea,
  Label,
  SearchInput,
  Button,
  Loader,
  LoaderContainer
} from './styles';

export default function StyledComponentPage() {
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
    <div className="App">
      <header className="App-header">
        <PageWrapper>
          <p>Styled Component Page</p>
          <Card>
            {isLoading ? (
              <LoaderContainer>
                <Loader />
              </LoaderContainer>
            ) : (
              <>
                <ProfilePicture>
                  {avatarUrl ? (
                    <Avatar src={avatarUrl} alt="Avatar" />
                  ) : (
                    <label>Foto de perfil</label>
                  )}
                </ProfilePicture>
                <Input value={name} placeholder="Nome" disabled />
                <Textarea value={bio} placeholder="Biografia" disabled />
                <Label>Informe um perfil do Github</Label>
                <SearchInput
                  placeholder="GitHub"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Button onClick={searchProfile}>Buscar</Button>
              </>
            )}
          </Card>
        </PageWrapper>
      </header>
    </div>
  );
}
