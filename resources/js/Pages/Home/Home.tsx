import HomeLayout from "@/Layouts/Home/HomeLayout";
import { PageProps } from "@/types";

export default function Home({ auth }: PageProps) {

  return (
    <>
      <div className="container">
        <div className="title">Page Home</div>
      </div>
    </>
  )
}

Home.layout = (page: JSX.Element) => <HomeLayout children={page} title={'Home'} auth={page.props.auth}/>
