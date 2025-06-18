function ErrorMessage({ errorMessage }: { errorMessage: string }) {
  return (
    <div>
        <p className='text-error-500'>{errorMessage}</p>
    </div>
  )
}

export default ErrorMessage