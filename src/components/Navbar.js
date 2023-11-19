import ModeSwitcher from "./ModeSwitcher";

function Navbar() {
  return (
    <nav className="container p-6 mx-auto justify-between">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">Creative</p>
        <span className="p-2 backdrop-blur-sm bg-gray-800/20 hover:bg-gray-800/40 shadow-xl text-white dark:bg-white/20 rounded-lg">
          <ModeSwitcher />
        </span>
      </div>
    </nav>
  )
}

export default Navbar;