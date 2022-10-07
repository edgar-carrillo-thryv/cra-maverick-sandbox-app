export const SandboxContainer = ({ children, className, ...rest }) => {
  let defaultClass = "bg-white w-[1200px] h-[600px] p-10 m-10"
  if (className) defaultClass += " " + className

  return (
    <div className={defaultClass} {...rest}>{ children }</div>
  )
}
