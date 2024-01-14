import useStore from "../../store/store";
import Image from "../../assets/logo.png";
import Swal from "sweetalert2";

const Login = () => {
  const login = useStore((state) => state.Login);
  const logout = useStore((state) => state.Logout);
  const setusername = useStore((state) => state.setUserName);
  const setpassword = useStore((state) => state.setPassword);
  const username = useStore((state) => state.userName);
  const password = useStore((state) => state.passWord);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const login_url = "/api/dispatcher/login";

    try {
      const formData = new FormData();
      formData.append("email", username);
      formData.append("password", password);

      const response = await fetch(login_url, {
        method: "POST",

        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (data.response === "Success") {
        sessionStorage.setItem(
          "id",
          data.dispatcher_data.AFRICATECH_session_dispatcher_id
        );

        login();
        Swal.fire({
          title: "Success",
          text: "You've successfully logged in!",
          icon: "success",
          confirmButtonColor: "teal",
        });
      } else {
        Swal.fire({
          title: "Oops!",
          text: "Email Or Password Incorrect!",
          icon: "error",
          confirmButtonColor: "teal",
        });
      }

      console.log(data);
    } catch (error) {
      Swal.fire({
        title: "Oops!",
        text: "Email Or Password Incorrect!",
        icon: "error",
        confirmButtonColor: "teal",
      });

      console.error(error);
    }

    console.log({
      username,
      password,
    });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center mx-24"
      >
        <div className="animate-fade-up   py-6 flex flex-col  sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="animate-wiggle-more animate-infinite animate-duration-[10000ms] absolute inset-0 bg-gradient-to-r from-teal-300 to-teal-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-2 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-sm mx-auto">
                <div className=" flex justify-center items-center">
                  <img src={Image} width={100}></img>
                </div>
                <div>
                  <h1 className="text-2xl text-center font-semibold">
                    Dispatcher Panel
                  </h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-2 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <label htmlFor="userName" className="">
                        Username
                      </label>
                      <div className="mt-4 col-span-3 sm:col-span-2">
                        <div className=" flex rounded-md shadow-sm">
                          <input
                            type="tel"
                            name="username"
                            id="username"
                            className="peer  h-10 w-full border-2 border-gray-300 rounded border-l-1 text-gray-900 focus:outline-none focus:border-teal-100 "
                            onChange={(e) => setusername(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <label htmlFor="password" className="">
                        Password
                      </label>
                      <input
                        type="password"
                        autoComplete="off"
                        id="password"
                        name="password"
                        className="peer  h-10 w-full border-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        onChange={(e) => setpassword(e.target.value)}
                      />
                    </div>
                    <div className="relative flex justify-center items-center">
                      <button
                        type="submit"
                        className="bg-teal-600 text-white rounded-md px-4 py-1"
                      >
                        sign in
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
