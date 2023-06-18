import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <>
      <div className="fixed bottom-0 right-0 left-0 flex gap-2 justify-center bg-gray-800 p-2">
        <p className="text-sky-600 text-2xl font-bold">
          {' '}
          <span className="text-red-600 text-4xl font-bold">
            Contact
          </span> me{' '}
        </p>
        <a
          href="https://m.facebook.com/khai.lek.5264"
          target="blank"
          className="cursor-pointer select-non text-4xl text-gray-300 hover:text-gray-500"
        >
          <AiFillFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/jl-khai-635328278/"
          target="blank"
          className="cursor-pointer select-none text-4xl  text-gray-300 hover:text-gray-500"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://github.com/JlKhai"
          target="blank"
          className="cursor-pointer select-none text-4xl  text-gray-300 hover:text-gray-500"
        >
          <AiFillGithub />
        </a>
      </div>
    </>
  )
}

export default Footer
