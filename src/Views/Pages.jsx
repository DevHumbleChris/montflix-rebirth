import { Fragment } from 'react'
import { Router } from '@reach/router'
import Movies from '../components/Movies'

export default function Pages() {
    return (
        <Router primary={false} component={Fragment}>
            <Movies path='/' />
        </Router>
    )
}