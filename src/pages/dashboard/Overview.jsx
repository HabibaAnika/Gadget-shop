import useAuth from "../../hooks/useAuth"


function Overview() {
  const {user} = useAuth()
  return (
    <div>
       <h3>{user.email}</h3>
       <h3>{user.roll}</h3>
       <h3>{user.status}</h3>
    </div>
  )
}

export default Overview