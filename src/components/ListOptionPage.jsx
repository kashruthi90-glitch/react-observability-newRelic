import { Link } from 'react-router-dom';
export default function ListOptionsPage() {
    return <div style={{display: 'flex', flexDirection: 'column'}}>
        <Link to="/error"> Error Simulate (Can see error captured in newRelic) </Link>
        <Link to="/counter"> Counter page (Can see metrics captured in newRelic) </Link>
      </div>
}