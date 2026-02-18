import ContactFAQSection from '@/components/layout/ContactFAQSection'
import { JSX} from 'react'

export default function ContactPage(): JSX.Element {

    return (
        <main style={{ maxWidth: 720, margin: '2rem auto', padding: '0 1rem' }}>
            <ContactFAQSection />
        </main>
    )
}