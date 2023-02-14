import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Header = () => {

    const [search, setSearch] = useState('')
    const navigate = useNavigate();

    const Scroll = ()=>{
        const nav = document.getElementById('nav');
        const img = document.getElementById('img')

        if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            nav.style.background = 'white'
            nav.style.color = 'black'
            nav.style.boxShadow = '10px 10px 10px rgba(0, 0, 0, 0.5)';
            img.src = '/images/logo2.svg'
        }
        else{
            nav.style.background = 'none';
            nav.style.color = 'white'
            nav.style.boxShadow = '0 0 0 0 rgba(0, 0, 0, 0.5)';
            img.src = '/images/logo.svg'

        }
    }
    window.onscroll = Scroll;

    const displaySearch = ()=>{
        const bar = document.getElementById('bar');
        if(bar.style.display === 'block'){
            bar.style.display = 'none';
        }
        else{
            bar.style.display = 'block';
        }
    }

  return (
    <Navbar id='nav'>
        <Logo onClick={()=>{navigate('/')}}>
            <img id='img' src="/images/logo.svg" alt="" />
        </Logo>
        <Menu>
            <Lang>
                {/* <CustomLink id='en'>
                    <img src="/images/en.svg" alt="" />
                    <span>EN</span>
                </CustomLink>
                <CustomLink id='fr'>
                    <img src="/images/fr.svg" alt="" />
                    <span>FR</span>
                </CustomLink>
                <CustomLink id='es'>
                    <img src="/images/es.svg" alt="" />
                    <span>ES</span>
                </CustomLink>
                <CustomLink id='ja'>
                    <img src="/images/jp.svg" alt="" />
                    <span>JA</span>
                </CustomLink> */}
                <Search>
                    <Bar id='bar'>
                        <input type="text" placeholder='Search' onChange={(e)=>setSearch(e.target.value)} value={search}/>
                    </Bar>
                    <Icon onClick={displaySearch}>
                        <SearchOutlinedIcon/>
                    </Icon>
                </Search>
            </Lang>
            <Links>
                <div>
                    <MenuLink to='/'>
                        Platfrom
                    </MenuLink>
                </div>
                <div>
                    <MenuLink to='/products'>
                        Products
                    </MenuLink>
                </div>
                <div>
                    <MenuLink to='/knowledge-base'>
                        Knowledge-Base
                    </MenuLink>
                </div>
                <div>
                    <MenuLink to='/resources'>
                        Resources
                    </MenuLink>
                </div>
                <Button onClick={()=>navigate('/demo')}>
                    Request a Demo
                </Button>
            </Links>
        </Menu>
    </Navbar>
  )
}

export default Header

const Navbar  = styled.div`
    margin:0;
    padding: 0 150px;
    position: fixed;
    background-color: rgba(0,0,0,0);
    color: white;
    height: 100px;
    width: 100%;
    z-index: 100;
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    @media(max-width: 1400px){
        padding: 0;
    }
`

const Logo = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    flex: 1;
    cursor: pointer;
`

const Menu = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: column;
    margin-bottom: 20px;
`

const Lang = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`

const Links = styled.div`
    display: flex;
    align-items: center;

    div{
        padding: 15px 60px;
    }

    div:hover{
        background: #ba2025;
    }
`

const CustomLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    gap: 5px;
    margin: 0 3px;
    font-size: 1rem;
    display: flex;
    margin: 0 10px;
    img{
        height: 20px;
        width: 20px;
    }
`

const Search = styled.div`
    display: flex;
    gap: 10px;
`
const Bar = styled.form`

    input{
        height: 30px;
        width: 250px;
    }
    display: none;
`

const Icon = styled.div`

    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

`
const MenuLink = styled(Link)`
    text-decoration: none;
    font-size: 1.1rem;
    color: inherit;
`

const Button = styled.button`
    height: 50px;
    width: 200px;
    border-radius: 30px;
    background: none;
    font-size: 1rem;
    font-weight: lighter;
    color: #fff;
    cursor: pointer;
    border: none;
    background: linear-gradient(139.75deg, #EB6B1E 0%, #BA2025 100%);
    &:hover{
        background: #ba2025;
    }
    margin-left: 20px;
`