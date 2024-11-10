const links = {
    openGitHub(repo) {
        const clean = repo.substring(9); // removes /projects
        window.open(`https://github.com/seankelliher${clean}`);
    },
    openNetlify(repo) {
        const clean = repo.substring(10); // removes /projects
        window.open(`https://sean-kelliher-${clean}.netlify.app`);
    },
    openHerokuSimple(repo) {
        const clean = repo.substring(9); // removes projects/
        window.open(`https:/${clean}.herokuapp.com`);
    },
    openHerokuComplex(repo, id) {
        const clean = repo.substring(9); // removes projects/
        window.open(`https:/${clean}-${id}.herokuapp.com/`);
    }
};

export { links };