(function() {
    const URL = 'https://raw.githubusercontent.com/laingsimon/geofs-realism-mods/refs/heads/main/links.json';

    function loadLink(link) {
        console.log(`Loading: ${link}...`);

        fetch(link)
            .then(resp => resp.text())
            .then(script => {
                try {
                    console.log(`Running: ${link}...`);

                    eval(script);
                } catch (e) {
                    console.error(`Failed to run link ${link}: ${e}`);
                }
            });
    }

    fetch(URL)
        .then(resp => resp.json())
        .then(links => {
            // links should be a string[]
            for (const link of links) {
                loadLink(link);
            }
        });
})();