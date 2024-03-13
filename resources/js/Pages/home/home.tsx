import HomeLayout from "../../Layouts/home/home_layout";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="title">Page Home</div>
      </div>
    </>
  )
}

Home.layout = (page: JSX.Element) => <HomeLayout children={page} title={'Home'} />
