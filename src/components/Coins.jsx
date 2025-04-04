import { Button, Container, HStack, Radio, RadioGroup, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState }  from "react";
import { server } from "..";
import CoinsCart from "./CoinsCart";
import ErrorComponent from "./ErrorComponent";
import Loader from "./Loader";



const Coins =()=>{
    const[loading, setLoading] = useState(true);
    const [fetchedData ,setFetchedData] = useState([])
    const[error, setError] = useState(false);
    const[currency, setCurrency] = useState("inr");
    const[page,setPage] = useState(1);

    const currencySymbol = (currency === "inr") ? "₹" : (currency === "eur") ? "€"  : "$" ;


    // i am creating total 132 button here 

    const btns = new Array(132).fill(1);

    const changePage = (page)=>{
        setPage(page);
        setLoading(true);
    }

    useEffect(()=>{

        const coinsFetch = async()=>{
            
           try{
                const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
                setFetchedData(data);
                setLoading(false);
                // console.log(data);

            }catch(error){
                setError(true);
                setLoading(false);
            }
            
        }

        coinsFetch();

    },[currency,page])

    // LoL, i was making mistake here while passing the depndencies problem was i was giving values in different - different arrayes and i later i realised all the dependencies should pass inside only one array

    // error handing inside the new component


    if(error){
      return <ErrorComponent message={"something is problem inside the coins component"} /> 
    }




    return (
        
        <Container maxW={'container.xl'}>
            {loading ? <Loader /> :   
            <>
            <HStack textTransform={'capitalize'} 
            w={'full'}
            p={'4'}
            fontSize={'2xl'}
            borderBottom = {'8px'}
            >
             <Text textAlign={'center'}
             w={'full'}
             >
               Get real-time market data for cryptocurrencies
              </Text> 
              </HStack>
            

                <RadioGroup p={'4'} value= {currency} onChange={setCurrency} padding = {'8'}   >
                <HStack spacing={'4'} fontSize={'xl'} >
                    <Text>{`Change Currency > `} </Text>
                    <Radio value={'inr'} >{`₹ INR`}</Radio>
                    <Radio value={'eur'} >{`€ EUR`}</Radio>
                    <Radio value={'usd'} >{`$ USD`}</Radio>
                </HStack>
               
            </RadioGroup>

            <HStack flexWrap={'wrap'} justifyContent={'space-evenly'} >
                { 
                fetchedData.map((i)=>{

                    // here i am creating an extra page component for extra details and styleing them

                        return < CoinsCart 
                        id = {i.id}
                        key={i.id}
                        image = {i.image} 
                        symbol = {i.symbol}
                        name = {i.name} 
                        price ={i.current_price}
                        currencySymbol = {currencySymbol}
                         />
                    })
                }   
                </HStack>
                
              
            <HStack w={'full'} overflowX={'auto'} p={'8'} >
                     
                 {btns.map((item,index)=>{
                    return  <Button  bg={'blackAlpha.900'} color={'rgb(252,211,76)'} onClick = {()=>{changePage(index+1)}} key = {index}  > {index+1} </Button>

                })}  
            </HStack>


        </> 
}
        </Container>
    )
}

export default Coins;