import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';

const Nav = () => {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link className="nav-link" href={"/"}>
          Início
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href={"./todayTasks"}>
          Hoje
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href={"/"}>
          Diário
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href={"./todayTasks"}>
          Tudo
        </Link>
      </li>
    </ul>
  )
}

export default Nav;