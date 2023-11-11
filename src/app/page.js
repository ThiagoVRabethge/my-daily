import Nav from "@/components/layout/nav";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Nav />

      <main className="container mt-3">
        <div className="row text-center">
          <div className="col-sm-12">
            <h1>My Daily</h1>
            <span>Sua rotina, em qualquer lugar, a qualquer hora</span>
          </div>
          <div className="col-sm-12">
            <button type="button" className="btn btn-primary mt-3">Iniciar</button>
          </div>
        </div>
      </main>
    </Fragment>
  )
}