

export const loadingBar = () => {
    return (
        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
            <circle
                className="opacity-25"
                cx={12} cy={12} r={10}
                stroke="currentColor"
                strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M 4 12 a 8 8 0 0 1 8 -8 V 0 C 5.373 0 0 5.373 0 12 h 4 Z m 2 5.291 A 7.962 7.962 0 0 1 4 12 H 0 c 0 3.042 1.135 5.824 3 7.938 l 3 -2.647 Z"></path>
        </svg>
    )
}