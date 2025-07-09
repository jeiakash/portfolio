export default function Footer() {
  return (
    <footer className="bg-white py-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-4">
            © Copyright <strong>Jei Akash</strong> All Rights Reserved
          </p>
          <div className="flex justify-center items-center space-x-4">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>Designed by</span>
              <a href="#" className="text-teal-500 hover:text-teal-600">
                Jei Akash M A
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
