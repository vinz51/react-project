import { CALL_API, RSAA } from 'redux-api-middleware'
import { normalize } from 'normalizr'

export const REQUEST = 'REQUEST_API'
export const RECEIVE = 'RECEIVE_API'
export const FAILURE = 'FAILURE_API'

export const api = (opts) => {
    
    const params = {}
    
    params.method   = opts.method ? opts.method : 'GET'
    params.endpoint = "https://jsonplaceholder.typicode.com/" + opts.endpoint
    
    if ( opts.types )
    {
        params.types = opts.types.map( (elem, idx) => {
            if ( idx == 0)
            {
                return {
                    type    : elem,
                    payload : (action, state) => ({ endpoint: action[RSAA].endpoint })
                }
            }
            else if ( idx == 1 )
            {
                return {
                    type : elem,
                    payload: (action, state, res) => {
                        return res.json().then((json) => normalize(json, opts.schema))
                    }
                }
            }
            else
            {
                return {
                    type : elem,
                    meta: (action, state, res) => {
                        if (res)
                        {
                            return {
                                status      : res.status,
                                statusText  : res.statusText
                            };
                        }
                        else
                        {
                            return { status : 'Network request failed' }
                        }
                    }
                }
            }
        } )
    }
    else
    {
        params.types = [REQUEST, RECEIVE, FAILURE]
    }
    
    if ( opts.headers )
    {
        params.headers = opts.headers
    }
    
    if ( opts.body )
    {
        params.body = opts.body
    }
    
    return { [CALL_API] : params }
}
