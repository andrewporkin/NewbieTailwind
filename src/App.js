function App() {
  return (
    <div class="bg-gray-100 flex justify-center space-x-40 items-center min-h-screen w-screen">
      <div class="bg-indigo-900 p-8 rounded-lg shadow-lg shadow-inner w-full h-128 max-w-md"></div>
      <div class="bg-indigo-900 p-8 rounded-3xl shadow-lg shadow-inner w-full h-128 max-w-md">
        <div class="border border-solid border-black rounded-md h-full pb-4">
          <div class=" divide-y divide-solid">
            <div>
              <h4 class="font-semibold text-center text-gray-400">Hearme</h4>
            </div>
          </div>
          <div class="px-4">
            <h2 class="text-2xl text-white font-semibold text-center my-6">
              Create Account
            </h2>
            <form action="#" method="POST">
              <div class="mb-4">
                <label for="email" class="block text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="mt-1 p-2 w-full  bg-indigo-950 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your email address"
                  required
                />
              </div>
              <div class="mb-4">
                <label for="password" class="block text-gray-400">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  class="mt-1 p-2 w-full  bg-indigo-950 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your password"
                  required
                />
              </div>
              <div class="w-3/6 bg-indigo-900 shadow-2xl border border-indigo-950  text-white text-center font-bold py-2 px-4 rounded-3xl justify-self-center focus:outline-none focus:shadow-outline">
                Register
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
