function solution(bridge_length, weight, truck_weights) {
    let sec = 0;
    const currentWeight = [];
    let sumOfCurrentWeight = 0;
    
    while (truck_weights.length || currentWeight.length) {
        if (weight >= sumOfCurrentWeight + truck_weights[0] && currentWeight.length <= bridge_length) {
            const truck = truck_weights.shift();
            currentWeight.push([truck, sec + bridge_length]);
            sumOfCurrentWeight += truck;
            sec++;
        } else {
            const [shiftedWeight, shiftedSec] = currentWeight.shift();
            sumOfCurrentWeight -= shiftedWeight;
            if (shiftedSec > sec) sec = shiftedSec;
        }
    }
    return sec + 1;
}