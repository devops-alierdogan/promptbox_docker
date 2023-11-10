import { Feed } from "@components";


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Softech
            <br className="max-md:hidden"/> 
            <span className="purple_gradient text-center"> AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">Promptbox is an open-source AI prompting tool for modern world to discover, create and share creative prompts</p>

        <Feed />
    </section>
  )
}

export default Home;