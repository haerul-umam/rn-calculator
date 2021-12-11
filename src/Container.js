import React, {useState, useEffect} from "react"
import { StyleSheet, Text, View } from 'react-native'
import Button from "./Button"

export default function Container() {
    const [expression, setExpression] = useState("")
    const [result, setResult] = useState(null)
    const [history, setHistory] = useState("")
    
    function print(val){
        
        setExpression((prev) => {
            if (result || result == 0) {
                setResult(null)
            }
            if (typeof val === "number"){
                return prev + val
            }
            if (prev[prev.length - 1] === val){ // check if operation same with prev input
                return prev
            }
            if ((prev === "" || prev ==="-") && val !== "-"){
                return ""
            }
            return prev + val
        })
    }

    function calculate(){
        try{
            let output = expression.split("")
            for (let i=0; i<output.length; i++) {
                if (output[i] === "%" && output[i + 1]) {
                    output[i] = "*"
                    output[i + 1] = output[i + 1] + "/100"
                }
                if (output[i] === "%"){
                    output[i] = "/100"
                }
                if (output[i] === "x") {
                    output[i] = "*"
                }
            }
           
            setHistory(prev => expression)
            setResult(prev => eval(output.join("")))
            setExpression("")
        }catch(e){
            return
        }
    }

    const conditionalRender = () =>{
        if (result == null){
            return expression
        }

        if (result == 0){
            return result
        }

        if (!result){
            return expression
        }

        return result
    }
    
    return (
        <View style={styles.parent}>
            <View style={styles.display}>
                <Text style={styles.textCalculate}>{history}</Text>
                <View style={styles.result}></View>
                <Text style={styles.textResult}>
                    {conditionalRender()}
                </Text>
            </View>
            <View style={styles.layoutButton}>
                <View style={styles.wrapper}>
                    <Button text={1} cb={print} />
                    <Button text={2} cb={print} />
                    <Button text={"-"} cb={print} />
                    <Button text={"+"} cb={print} />
                </View>
                <View style={styles.wrapper}>
                    <Button text={3} cb={print} />
                    <Button text={4} cb={print} />
                    <Button text={"/"} cb={print} />
                    <Button text={"x"} cb={print} />
                </View>
                <View style={styles.wrapper}>
                    <Button text={5} cb={print} />
                    <Button text={6} cb={print} />
                    <Button text={"%"} cb={print} />
                    <Button text={"="} cb={calculate} />
                </View>
                <View style={styles.wrapper}>
                    <Button text={7} cb={print} />
                    <Button text={8} cb={print} />
                    <Button text={9} cb={print} />
                    <Button text={0} cb={print} />
                </View>
            </View>
        </View>
    )
}

let pRightLeft = 30

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: "#ffb47b",
    },
    display: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "flex-end",
        marginBottom: 15,
        paddingLeft: pRightLeft,
        paddingRight: pRightLeft,
    },
    layoutButton: {
        flex: 2,
        backgroundColor: "#ff7d5d",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: "center"
    },
    textCalculate: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 25
    },
    textResult: {
        fontSize: 40
    },
    result: {
        borderTopColor: "#fff",
        borderTopWidth: 1,
        width: "100%",
        marginTop: 5,
        marginBottom: 5
    },
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: pRightLeft,
        paddingRight: pRightLeft,
        marginBottom: 5
    }
})
