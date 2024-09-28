import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
 console.log(user);
 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8zMzMdHR0xMTEpKSkgICAuLi4ZGRnMzMzY2NiFhYXp6elSUlK3t7f8/Pw1NTUkJCTj4+Px8fGxsbHr6+t0dHSrq6v29vYTExNhYWGhoaEAAADAwMC0tLRPT09qamqZmZl3d3daWlpBQUFtbW3IyMhJSUkODg6MjIw8PDycnJyJiYlZEragAAAMhUlEQVR4nO1ciXqiOhSGrCJCwiIqdcWtOu//fvckgGJ16jK0gDf/fNORDmoOZ18SyzIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD4H8GHP/m/xYs3xCgIRn62jvz3JNG3kvWY77ze4GOwbXoxP4NozGybyZWbfvCJ0/RqfgAjgYUNIGwa7BAfxm+njo60NQQG6o6Eos+w6SXVDEdiuwARUyejEqejphdVK0ZMM1BLKqabOEWMrr2mV1Urkj22cwLhB8FesJOMToJ3UsdEkpxE9ZehRZxKRsZJ08uqE8GEnnQR2Ei8IKOYb8I34qI1I+RMIkabIJFM7sA5+v57UBls4wU/USgwsWfBgDLiKRKbXlwtyPZz1zuzUQAbJ2FKCf9semWv45IzYGt44m4Q2JuTUaUzUE86Ca9u7gp8q7pyJ0M0czzw+bnfUKAL0Ea6drpK4QVCCLspkak7RIXT0EYVR8GEy1nTq3sVzmQ9dMuLHXiIOZWDYIrYWRvB8bsR2v9pcpmvwxkTRvbarftWwDBaaNOyDDeUnQQV/H/kZh9ZJ+PUvracSEVnljth2tE7YFoGzvRQ8Y3qjmQcNb3aV7BQZGCgK7GWiIB/sCGKAdMiZRqs0FlSBSGRE3TR2KSFTcE0CyLJ1EsBpsUFozpwtrlvzKUVS+Uyukaib/mnWJTJxJ0o5RNCEQNs5MdwiOAXpecg86bX+wJ8y01wySgEbGSkMC3a0e+0Np4sDupevuhbs30ULGhBIrAxWKhcX5ELjp5ItHRX6JRwyGXXpNS34gODmGVGS+9HJ44H2qjjNZaAo6dzZytIoYzy2DUKLWtIlJVMwgwVBoWRFC5w4SHA0Uu5DIdj7RvxvmtFRt/yuM6S5NydMYYLk7mLZ7jQRp7EGfpwrCmEbpihrqUYvhWWwqkUcKONKhhShvILpZgfw1HyCZIZ9tf2vHMFDd8aylM+L7PAY6XZRJBfaKMqtqdALXQ7p4KWNT3FLJqNqbtARSwK2uhuuC275x0uEIrSDQidz9NBUCT4QjA5hwvpdrt6sSKVypoyOIyn8YZqaiFlgovFOe3tHqH+pYyW7hAUUJQpBQSmoy7zMDywSqnipI2ggMOi3AaOctld+nxrJa/Is5XUqgRfktLC7rrm48+Yjq9ltGDjPg2HtEgo2B68YQclFXz9NQMr2ggJfqGNwlZs7ByFvrKj9jc0Mnl0V7ywtER0sVW6pd8RqDgHKQUj2m0I3sE64ujAvqFP08joMlRsVJFA5+JRkFF5h0BlVmWe4GNMg6bX+zS2f7Wjl9rIl0EfcXva9HqfgTaK92W0BM181+mSnSmM/oo+SCCm3SsB+8vDYBrM76uhBtl0zxMOOWN86KZEy+l3DkMLafeaho5OJ4itBoLukShUddRL3Puf2ib0iiKa3LjJnokbuUVVRhdWximJm170U4iZHnyyMSOeO5DfEAjpPwuPEPnQtOlFP4eZZFjo4gVfKG2Ei9sUYoG8AB4B7hqFljMoGjGYYc+Z3EjzCx4qGYW4lLEuuUM9FOMfywo+Rgs3kQzfJlGGibSF4J0KaIqxH2dH7by8RogaCLpJII9cpaZk2PSSX0N6qlKgSZzI3PpcgEysAVPaOJouI6eYSOlOqh+r1mDZiJGzy3k9TThmYYLAINFpTKQck6HXse6vbtQX1W3QxiAiX0JxCjKqmvtD1eYHg0qQ3W/5xJBffRESwlSjvhBOxhI3u8j5QUYnSo6pH5VaiolctDZNrOwPyTWpT0D+sjBXQFt3ZeJIktI1gn0JEyow5l54nv0G90L/tHWexrfCpP/ZUy/dwEoGUkcsaBYsqG5oqwp+lF/k/e3IVbIJmUVWmaiBEE+u28lG3woOiMjxJrZiMk6dBVL1JaxmgAoFBO7RSVBOz5JMySgQFM7Os6Y5kYy2s0Dsz/XSCfb8DJWNerto1KNCAZU2Au0gnNKdjuEB0FlM7K/hAGa9Ntqb3jgXP0Y3YbonMg0nXDFOCDRxZ4gVjoNmgbpACfhLnVk4N4IBhts4FxUhkaubTeg0GEi6CzxIElXyxMZJPCnNCUNwwScQ9XBCJHjAz6taADymdQvNzZaXMYtgfAMpBaFpMCznLbIgOvXT1IXStO1io/7xD+wy2FHzUnLRND3XGK0rc5REzCDBp5kzLectSBJsEC5DnIvqb2Wn0Bkqn2pXAOdbPXm2+hgjSPCRGgTe5J0JJieBRwtuYX5RXvtqTRUfMe21Lbzx/XhSMRoi3ypC58FU+weB2f6Yz+yp/8yqb8xHF7+QyETL9pj4lrN2IzAtJ53SmSEh/BgPdQROlpA+FDN7bHC5+JRe1TrgKbRrr7BvxWKfgGk5TVECTcwDV5j3CbE86vvAHcIN6PNi7b6VoGtdlH3N4DDqr5Yt2PoF3x8M9ply9GVxDRyFGj2UhBzd1Zi5xW0zxvfD0RcKrS27agJgqoYUewcKXkWmrSDRH+6Vo0en3XcqooncAZI7Z0vc8raRE3yxk2q/U5zxLzQKmx/B0Oa/5W1ovsGaE4rA0YuLjVuQXxCyX8Z3i03bHSX55sRiyEjIlS4C6M8hbShWAYm9g0Spu0KVigVTO34Qnd8JpxVTtyvBVZiep1gYCzBB5cegFlSrtOmLc0dvnyVOqEHgCFF2JxDTGWa4/TNANB+jErwXnP2PbE9JtT9mFDyEcvRClNoIKcWjY6N+7PUFB4MFtnR+Duja1IOLKJHa0YuTrGKaqc7E42GYczygg3+SUcg0eZvSDecgGV+Co8f4vHELpY8vUN/Zc4JK1kH6P7bc5wFOGoJsOVcjCLjkgR6YfZwLmtvn8oZghzaY0ioiQhhZuv2xfRZVIp876yM5mxkMKecTMvALAJs63KvdyyrhEK8xwl+f7TEZWhN+8PKPbgWlSsicAWUfy3BVCarRM0x0x6f3YWIlHBLr3bb52O0C0zlVW0UO5Wkfz1n84Jw1ommsJZaN23bgi58IRD/dvh5dVzXS3hNvDk+WlKxORofRVQvSjCpGSzoGbRRSy9rgqaUNi9FMLMLkNF8FmXW/ZWY17vPxZ7jihKDDcyMXrp0XByAijbOSoaqDQ5ctq8Q5mw8WOsu+96xwOXMkJRLahPbz7TV5SC5Zoj+rHdKqG8LOK2sBv7BdLr0wdxCR3uxWRBAY7abtqXH4lZ+vvNMqshYHk8pMB0OTZ8zWT+L1vSKnOF1PuUMsOK8O/ov84J43Qx/hSnlcsP2qY+Ni95HIaqMKC0I/O9b7vwPf6tmkKqkYS/vNzgqz4gEtKwcFI+W6Rdl/HfD7HF+OOwKNbYvI/wW6ZPm1Pg4Rec96FyKVC+lVC7JFVxYNW5Z1/BvcwfUMOZH9bo3hfgdw/6urlqNqBH2O3kVUAcnXLoeKWSVtVzHndagYrnc6ZeLk/1XFav10BtNW+Jab54xfOquMZtv3OIdZ0QDKKL5SqLOOdzCr+aba9EoZNVMZUueKdZ6JGloZryYAwHWM3+b03iCTt3esSHYMW1M+/ieAMt7czCHArBbnw3Ue6f72VgfB0O6VvnGtk1j1fNZlznhhVvn86fpxzTyv43n5VjC4cXJD6TqmT1PoeLVhWpdNvxGmlsBPdRIUlojWBiRrma9QDynlf9l3JJ4dVQ3Qo/uXHwFjdVCoiVQzVbeJpOlTgnLruJnXgWVN1UDQ51s5Y/4l86e0ffqBagTf10ahyhlvP31MH/2SfJe9Wy9qtc3pjQFHAH/I1vx4ZPDvX6CmxuQtz0gftGej7XGYDerHZJW81Jm6QaBvxbsb2475Q8lU0JdIEvYTIJKvlzUUkbQ98a+OchDMvpNmqDeOPiX5+mTqBJMiqksTjqqVWmnf3N+hCt/r7uTdkxH+ERgN61L1ray4bHWk/b2xT5BQcmOHa70Q+oSTmkiM12eBgyTq3kykOs6K4R9nIXy+nNREoeUPKSsPMeQPTPwtflQFzxCorrNnfSs6IGUWCTo8MB7u/TVsr5lAgWV9XevRbDVYz1fRA9Wa6vzcz1JoC7KqiT7/PItyPybd3i6D/Agwa6Itv/pbheAngH69mwscpva3x8vUCtzEqHM8/mlHUaXw64av34BTa8Z7l8TD789V9H6Xwga2/vwuhXYTFP6Sv8+Bf/2sId/y9387HugnCGxkB3eP1Vl6uoNdI4N4Ye/38AZ9opai1/8VrJob+PHG5Dfw0dw0rPfoSaT/Zkh5czPNsw/+G/hojsLQ+R28vyV9fwoNDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP5v+A9ntNCpqDOv6gAAAABJRU5ErkJggg=="
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
          <span className="ms-2 fw-bold">JuristJournal</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/articles">Articles</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>

            {isAuthenticated ? (
              <>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle d-flex align-items-center"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src={user.picture}
                      alt={user.name}
                      className="rounded-circle"
                      width="40"
                      height="40"
                    />
                    <span className="ms-2">{user.name}</span>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="userDropdown">
                    <li>
                      <button
                        className="dropdown-item btn btn-secondary"
                        onClick={() => logout({ returnTo: window.location.origin })}
                      >
                        Log Out
                      </button>
                    </li>
                  </ul>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button className="btn btn-light" onClick={() => loginWithRedirect()}>
                  Log In
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
