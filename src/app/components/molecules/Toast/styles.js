import styled from 'styled-components';

export const StyledToast = styled.div`
    display: block!important;
    max-width: 350px;
    overflow: hidden;
    font-size: .875rem;
    background-color: rgba(255,255,255,.85);
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.1);
    box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.1);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-radius: .25rem;
    .toast-header {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        padding: .25rem .75rem;
        color: #6c757d;
        background-color: rgba(255,255,255,.85);
        background-clip: padding-box;
        border-bottom: 1px solid rgba(0,0,0,.05);
    }
    .toast-body {
        padding: .75rem;
    }
}`;