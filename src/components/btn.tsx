export default function Button({ text, bg, disabled, onClick }: { text: string, bg?: string } & React.ComponentPropsWithoutRef<'button'>) {
    return (
        <button title='button' type="submit" className={`px-8 py-3 rounded-md text-main-white ${bg || 'bg-main-success'} shadow-sm hover:bg-opacity-90 disabled:bg-gray-600 disabled:cursor-not-allowed`}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    )
}
