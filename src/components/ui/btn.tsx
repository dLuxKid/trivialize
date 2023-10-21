export default function Button({ text, bg }: { text: string, bg?: string }) {
    return (
        <button title='button' type="submit" className={`px-6 py-3 rounded-md text-main-white ${bg || 'bg-main-success'} shadow-sm`}>
            {text}
        </button>
    )
}
