

export const Home = () => {
    return (
        <div className="flex flex-col text-center">
            <h1 className="pt-12"> Hello! </h1>
            
            <br/>

            <br/>

            This page is just for showing content from my API.<br/>
             I made it to learn how to build and handle web apps. It's made in React and written in TypeScript, I think. Web development has so many technologies, it's a bit confusing.

            <br/>

            <br/>
            I wanted to create some "experiences," so I hid the nav bar by default. Each pseudo app is on its own page.
            <br/>

            <br/>
            To choose an app, click "show nav bar" and pick the one you want. Each app calls a separate API, which is a public repo on GitHub.
            <br/>
            <a href="https://www.github.com/Korczek" target="_blank">my git</a>
            <br/>

            <br/>

           
            <a href="http://www.jakubkorczynski.com" target="_blank">my website        <br/> </a>
            <a href="http://www.google.com" target="_blank">api</a>

        </div>
    )
}