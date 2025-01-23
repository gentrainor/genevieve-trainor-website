import Link from 'next/link';

export default function Main() {
    return (
        <div>
            <h1>Welcome to the Main Screen!</h1>
            <Link href="/">
                <button style = {{ marginTop: '20px', padding: '10px 20px', fontSize: '16px'}}>
                    Back to Home!
                </button>
            </Link>
        </div>
    )
}