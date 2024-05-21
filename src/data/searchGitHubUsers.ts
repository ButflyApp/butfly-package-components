import axios from 'axios'
export async function searchGitHubUsers(query: string = '') {
    try {
        const {data} = await axios.get('https://api.github.com/search/users', {
            params: { q: query },
        });

        // A resposta do GitHub API está no objeto 'data'
        const users = data.items

        return users || [];
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        return [];
    }
}
