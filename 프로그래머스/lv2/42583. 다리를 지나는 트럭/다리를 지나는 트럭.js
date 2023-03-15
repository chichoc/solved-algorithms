function solution(bridge_length, weight, truck_weights) {
    const passing = [];
    let sec = 0;
    let sumOfPassing = 0;
    
    while (truck_weights.length || passing.length) {
        if (weight >= sumOfPassing + truck_weights[0]) {
            sumOfPassing += truck_weights[0];
            passing.push([truck_weights.shift(), sec + bridge_length]);
            sec++;
        } else {
            const [shiftedWeight, shiftedSec] = passing.shift();
            sumOfPassing -= shiftedWeight;
            if (shiftedSec > sec) sec = shiftedSec;
            // 앞에 트럭이 나갈 때 까지 못 들어오므로 나가는 시간으로 점프
        }
    }
    return sec + 1;
}