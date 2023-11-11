import Nav from '@/components/layout/nav';
import 'bootstrap/dist/css/bootstrap.css';
import { Fragment } from 'react';

const TodayTasks = () => {
  return (
    <Fragment>
      <Nav />

      <section className="container text-center mt-3">
        <h1>Hoje</h1>
        <span>Tarefas que não se repetem</span>

        <div className="row mt-5">
          <div className="col-sm-10">
            <input type="text" className="form-control" placeholder="Nova tarefa" />
          </div>
          <div className="col-sm-2">
            <button type="button" className="btn btn-success">
              Adicionar
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default TodayTasks;