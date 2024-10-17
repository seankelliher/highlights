const links = {
    openGitHub(repo) {
        window.open(`https://github.com/seankelliher${repo}`);
    },
    openNetlify(repo) {
        const clean = repo.substring(1); // removes preceding slash.
        window.open(`https://sean-kelliher-${clean}.netlify.app`);
    },
    openHerokuSimple(repo) {
        window.open(`https:/${repo}.herokuapp.com`);
    },
    openHerokuComplex(repo, id) {
        window.open(`https:/${repo}-${id}.herokuapp.com/`);
    }
};

export { links };