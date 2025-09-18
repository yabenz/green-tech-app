type ButtonProps = {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary'; // optional, defaults to primary
  className?: string;
};

export default function Button({ label, onClick, variant = 'primary', className= ''}: ButtonProps) {
  const baseStyles = "mx-1 my-0.5 px-4 py-2 font-semibold rounded-md shadow transition duration-200 border cursor-pointer whitespace-nowrap h-fit " + className;

  const variantStyles =
    variant === 'primary'
      ? "bg-primary text-white hover:bg-blue-800 border-transparent"
      : "bg-white text-primary hover:bg-blue-50 border-blue-600";

  return (
    <button onClick={onClick} className={`${baseStyles} ${variantStyles}`}>
      {label}
    </button>
  );
}
