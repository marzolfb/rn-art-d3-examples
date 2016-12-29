rn-art-d3-examples
=======================

## Intro

This is a proof of concept exercise to compare/contrast creating react-native charts (very simple ones) using [react-native-pathjs-charts](https://github.com/capitalone/react-native-pathjs-charts) vs using a combination of [react-native ART](https://github.com/facebook/react-native/tree/master/Libraries/ART) & [d3](https://github.com/d3/d3) & [d3-shape](https://github.com/d3/d3-shape)

The approach here is to take the example app included in [react-native-pathjs-charts](https://github.com/capitalone/react-native-pathjs-charts) and reproduce the same charts using "the alternate approach".

I started with the pie chart and the experience creating that chart gave me enough of a feel for using "the alternate approach", so the pie chart is probably the only chart type I will reimplement with "the new approach".

## Installation / Running

After cloning this project, running the example should simply be a matter of:

```
npm install
react-native run-ios
```

## Influences from others

I didn't even realize "the new approach" was a possible approach until I read a couple of really great articles (and studied their corresponding github repos):
- [React Native ART and D3](http://hswolff.com/blog/react-native-art-and-d3/) by Harry Wolff
- [Animated Charts in React Native using D3 and ART](https://medium.com/the-react-native-log/animated-charts-in-react-native-using-d3-and-art-21cd9ccf6c58#.i2kix3z07) by David Vacca

## What's next?

Given that using d3 with react-native is a viable possibility, I wondered if others had created derivative charting libraries based on d3. After some quick googling, I quickly came across [c3](http://c3js.org/) which is really interesting looking. So, now I'm wondering, "So, why reinvent the wheel creating chart generators using d3 when c3 has already done that?". The immediate next thought was, "I wonder if anyone has created a react-native or react lib that wraps c3" and sure enough I came across [this 2 year old project](https://github.com/terry81811/c3-react).

So, now I'm thinking that it would be nice to have a react-native-c3 library to make it super-simple to create react-native charts. I may try this out some day. Needless to say, this whole experience has made me realize that there are actually a number of different ways of creating react-native charts (yet another way I didn't mention above was using [victory-native](https://github.com/FormidableLabs/victory-native))
