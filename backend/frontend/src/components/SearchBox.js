import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const SearchBox = () => {
    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword) {
            history.push(`/shop/?keyword=${keyword}&page=1`)
        } else {
            history.push(history.push(history.location.pathname))
        }
    }
    return (
        <Form onSubmit={submitHandler} inline>
            <Form.Control
            type='text'
            name='q'
            onChange={(e) => setKeyword(e.target.value)}
            className='mr-2 ml-3'
            style={{borderRadius:"50px"}}
            >
            </Form.Control>

            <Button
                type='submit'
                variant='outline-light'
                className='p-1 my-1 mr-2'
            >
                Search
            </Button>
        </Form>
    )
}

export default SearchBox
