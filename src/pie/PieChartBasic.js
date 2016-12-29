'use strict'

import React, { Component } from 'react';
import { View, Text, Navigator, ART } from 'react-native';
import { Colors, cyclic, fontAdapt } from '../util'
import _ from 'lodash'

import * as shape from 'd3-shape';

const d3 = {
  shape,
};

const {
  Surface,
  Group,
  Rectangle,
  Shape,
} = ART;

class PieChartBasic extends Component {
  render() {
    let data = [{
      "name": "Washington",
      "population": 7694980
    }, {
      "name": "Oregon",
      "population": 2584160
    }, {
      "name": "Minnesota",
      "population": 6590667,
      "color": {'r':223,'g':154,'b':20}
    }, {
      "name": "Alaska",
      "population": 7284698
    }]

    let options = {
      margin: {
        top: 20,
        left: 20,
        right: 20,
        bottom: 20
      },
      width: 350,
      height: 350,
      color: '#2980B9',
      r: 50,
      R: 150,
      legendPosition: 'topLeft',
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      pallete: [
          {'r':25,'g':99,'b':201},
          {'r':24,'g':175,'b':35},
          {'r':190,'g':31,'b':69},
          {'r':100,'g':36,'b':199},
          {'r':214,'g':207,'b':32},
          {'r':198,'g':84,'b':45}
        ],
      label: {
        fontFamily: 'Arial',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#ECF0F1'
      }
    }

    var color = (i) => {
      let color = (options && options.color)
      if (color && !_.isString(color)) color = color.color
      let pallete = (options && options.pallete) || Colors.mix(color || '#9ac7f7')
      return Colors.string(cyclic(pallete, i))
    }

    var pieData = d3.shape.pie()
      .value((item) => item.population)
      (data)

    var arcs = []
    let pallete = options.pallete || Colors.mix(options.color || '#9ac7f7')

    data.map((item, index) => {
      let fillColor = (item.color && Colors.string(item.color))
      if ((fillColor) && !_.isString(fillColor)) fillColor = fillColor.color
      if (!fillColor) fillColor = Colors.string(cyclic(pallete, index))

      let strokeColor = Colors.darkenColor(fillColor)

      let arcData = pieData[index]
      let arcGenerator = d3.shape.arc()
        .outerRadius(options.R)
        .innerRadius(options.r)
        .startAngle(arcData.startAngle)
        .endAngle(arcData.endAngle)

      let id = 'pie_shape_' + index

      let labelX = arcGenerator.centroid()[0]
      let labelY = arcGenerator.centroid()[1]

      arcs.push({
        id: id,
        fillColor: fillColor,
        strokeColor: strokeColor,
        arcGenerator: arcGenerator,
        label: item.name,
        labelX: labelX,
        labelY: labelY
      })
    }
    )

    const x = options.width / 2 + 20;
    const y = options.height / 2 + 20;

    var textStyle = fontAdapt(options.label)

    return (
      <View>
        <Surface width={options.width} height={options.height}>
          <Group x={x - options.margin.left} y={y - options.margin.top}>
            {
              arcs.map((arc) => {
                return (
                    <Shape
                      key={arc.id}
                      d={arc.arcGenerator()}
                      stroke={arc.strokeColor}
                      fill={arc.fillColor}
                      />
                )
              }
              )
            }
          </Group>
        </Surface>
        {
          arcs.map((arc) => {
            return (
              <Text key={'label_' + arc.id}
                    style={{
                            textAlign: 'center',
                            position: 'absolute',
                            left: x - options.margin.left - 20 + arc.labelX,
                            top: y - options.margin.top + arc.labelY,
                            backgroundColor: 'transparent',
                            color: options.label.color,
                            fontWeight: options.label.fontWeight,
                            fontSize: options.label.fontSize,
                            fontFamily: options.label.fontFamily
                          }}>
                { arc.label }
              </Text>
            )
          }
          )
        }
      </View>
    )
  }
}

export default PieChartBasic;
