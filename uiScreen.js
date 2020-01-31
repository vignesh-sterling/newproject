import React from 'react'
import {
    View, Text,
    ScrollView, StyleSheet
} from 'react-native';
import { AreaChart, Grid, XAxis, YAxis, BarChart, LineChart } from 'react-native-svg-charts'
import ProgressCircle from 'react-native-progress-circle'
import { Circle, Path, Defs, LinearGradient, Stop } from 'react-native-svg'
// import * as scale from 'd3-scale'

class DecoratorExample extends React.PureComponent {

    render() {
        const data = [50, 10, 40, 95, 85, 91, 35, 53, 24, 50]
        const sampledata = [50, 10, 40, 95, 85, 91, 35, 53, 53, 24, 50, 20, 80]
        const CUT_OFF = 20
        const Labels = ({ x, y, bandwidth, data }) => (
            data.map((value, index) => (
                <Text
                    key={index}
                    x={x(index) + (bandwidth / 2)}
                    y={value < CUT_OFF ? y(value) - 10 : y(value) + 15}
                    fontSize={14}
                    fill={value >= CUT_OFF ? 'white' : 'black'}
                    alignmentBaseline={'middle'}
                    textAnchor={'middle'}
                >
                    {value}
                </Text>
            ))
        )
        const Gradient = ({ index }) => (
            <Defs key={index}>
                <LinearGradient id={'gradient'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
                    <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'} stopOpacity={0.8} />
                    <Stop offset={'100%'} stopColor={'rgb(134, 65, 244)'} stopOpacity={0.2} />
                </LinearGradient>
            </Defs>
        )
        // const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
        const fill = 'rgb(134, 65, 244)'
        const Decorator = ({ x, y, data }) => {
            return data.map((value, index) => (
                <Circle
                    key={index}
                    cx={x(index)}
                    cy={y(value)}
                    r={4}
                    stroke={'rgb(134, 65, 244)'}
                    fill={'white'}
                />
            ))
        }

        const Line = ({ line }) => (
            <Path
                d={line}
                stroke={'rgba(134, 65, 244)'}
                fill={'none'}
            />
        )

        return (
            <ScrollView>
                <View style={{ backgroundColor: '#292929' }}>
                    <Text style={{ alignSelf: 'center', fontSize: 15, color: 'white' }}>Overal sales statistics</Text>
                    <Text style={{ fontSize: 15, color: 'white' }}>PROPERTY</Text></View>
                <View style={{ height: 200, flexDirection: 'row', backgroundColor: '#212121' }}>

                    <YAxis
                        data={data}
                        style={{ marginBottom: 30 }}
                        contentInset={{ top: 10, bottom: 10 }}
                        svg={{ fontSize: 10, fill: 'grey' }}
                    />
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <LineChart
                            style={{ flex: 1 }}
                            data={data}
                            contentInset={{ top: 10, bottom: 10 }}
                            svg={{ stroke: 'rgb(134, 65, 244)' }}
                        >
                            <Grid />
                            <Decorator />

                        </LineChart>
                        <XAxis
                            style={{ marginHorizontal: -10, height: 30 }}
                            data={data}
                            formatLabel={(value, index) => index}
                            contentInset={{ left: 10, right: 10 }}
                            svg={{ fontSize: 10, fill: 'grey' }}
                        />
                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        <ProgressCircle
                            percent={30}
                            radius={50}
                            borderWidth={8}
                            color="#3399FF"
                            shadowColor="#999"
                            bgColor="#fff"
                        >
                            <Text style={{ fontSize: 18, borderBottomWidth: 2, borderColor: 'red',color:'blue' }}>{'400M'}</Text>
                            <Text style={{ fontSize: 18,color:'red' }}>{'900M'}</Text>
                        </ProgressCircle></View>
                </View>
                <View style={{ backgroundColor: '#2E2E2E' }}>
                    <Text style={{ fontSize: 15, color: 'white' }}>HOSPITALITY</Text>
                </View>
                <View style={{ flexDirection: 'row', height: 200, paddingVertical: 16 ,backgroundColor:'#1F2220'}}>
                    <BarChart
                        style={{ height: 200, width: 250, marginHorizontal: 30 }}
                        data={data}
                        svg={{ fill: 'rgba(135, 206, 235, 0.8)' }}
                        contentInset={{ top: 10, bottom: 10 }}
                        spacing={0.2}
                        gridMin={0}
                    >
                        <Grid direction={Grid.Direction.HORIZONTAL} />
                        <Labels />
                    </BarChart>
                    <View style={{ alignSelf: 'center' }}>
                        <ProgressCircle
                            percent={30}
                            radius={50}
                            borderWidth={8}
                            color="#3399FF"
                            shadowColor="#999"
                            bgColor="#fff"
                        >
                            <Text style={{ fontSize: 18, borderBottomWidth: 2, borderColor: 'red',color:'green' }}>{'400M'}</Text>
                            <Text style={{ fontSize: 18,color:'red' }}>{'900M'}</Text>
                        </ProgressCircle>
                    </View>
                </View>
                <View style={{ backgroundColor: '#2E2E2E' }}>
                    <Text style={{ fontSize: 15,  color: 'white' }}>MALLS</Text>
                </View>
                <View style={{ flexDirection: 'row', height: 200, paddingVertical: 16,backgroundColor:'#2E2E2E' }}>

                    <AreaChart
                        style={{ height: 200, width: 300 }}
                        data={sampledata}
                        contentInset={{ top: 20, bottom: 20 }}
                        svg={{ fill: 'rgb(70, 71, 66,0.8)' }}
                    >
                      <Decorator />
                        <Gradient />
                    </AreaChart>
                    <View style={{ alignSelf: 'center' }}>
                        <ProgressCircle
                            percent={30}
                            radius={50}
                            borderWidth={8}
                            color="#3399FF"
                            shadowColor="#999"
                            bgColor="#fff"
                        >
                            <Text style={{ fontSize: 18, borderBottomWidth: 2, borderColor: 'red',color:'blue' }}>{'400M'}</Text>
                            <Text style={{ fontSize: 18,color:'red' }}>{'900M'}</Text>
                        </ProgressCircle>
                    </View>
                </View>
                <View style={{ backgroundColor: '#2E2E2E' }}>
                    <Text style={{ fontSize: 15, color: 'white' }}>ENTERTAINMENT</Text>
                </View>
                <View style={{ flexDirection: 'row', height: 200, paddingVertical: 16,backgroundColor:'#2E2E2E' }}>
                    <ProgressCircle
                        percent={30}
                        radius={50}
                        borderWidth={8}
                        color="#3399FF"
                        shadowColor="#999"
                        bgColor="#fff"
                    >
                        <Text style={{ fontSize: 18, borderBottomWidth: 2, borderColor: 'red',color:'green' }}>{'400M'}</Text>
                        <Text style={{ fontSize: 18,color:'yellow' }}>{'900M'}</Text>
                    </ProgressCircle>
                    <YAxis
                        data={data}
                        style={{ marginBottom: 30 }}
                        contentInset={{ top: 10, bottom: 10 }}
                        svg={{ fontSize: 10, fill: 'grey' }}
                    />
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <LineChart
                            style={{ flex: 1 }}
                            data={data}
                            contentInset={{ top: 10, bottom: 10 }}
                            svg={{ stroke: 'rgb(134, 65, 244)' }}
                        >
                            <Grid />
                            <Decorator />

                        </LineChart>
                        <XAxis
                            style={{ marginHorizontal: -10, height: 30 }}
                            data={data}
                            formatLabel={(value, index) => index}
                            contentInset={{ left: 10, right: 10 }}
                            svg={{ fontSize: 10, fill: 'grey' }}
                        />
                    </View>

                </View>
                <View style={{ backgroundColor: '#2E2E2E' }}>
                    <Text style={{ fontSize: 15,  color: 'white' }}>AT THE TOP</Text>
                </View>
                <View style={{ flexDirection: 'row', height: 200, paddingVertical: 16,backgroundColor:'#2E2E2E',marginBottom:10 }}>
                <View style={{ alignSelf: 'center' }}>
                        <ProgressCircle
                            percent={30}
                            radius={50}
                            borderWidth={8}
                            color="#3399FF"
                            shadowColor="#999"
                            bgColor="#fff"
                        >
                            <Text style={{ fontSize: 18, borderBottomWidth: 2, borderColor: 'red' ,color:'red'}}>{'400M'}</Text>
                            <Text style={{ fontSize: 18,color:'green' }}>{'900M'}</Text>
                        </ProgressCircle>
                    </View>
                    <AreaChart
                        style={{ height: 200, width: 300 }}
                        data={sampledata}
                        contentInset={{ top: 20, bottom: 20 }}
                        svg={{ fill: 'rgb(114, 87, 35,0.2)' }}
                    >
                        <Decorator />
                        <Gradient />
                    </AreaChart>
                   
                </View>
            </ScrollView>
        )
    }

}
const styles = StyleSheet.create({
    scale: {
        width: 50,
    }
})
export default DecoratorExample