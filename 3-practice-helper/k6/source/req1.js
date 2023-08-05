import http from '3-practice-helper/k6/http';
import { sleep, check } from 'k6';
import { Counter } from '3-practice-helper/k6/metrics';

// A simple counter for http requests

export const requests = new Counter('http_reqs');
// you can specify stages of your test (ramp up/down patterns) through the opti>
// target is the number of VUs you are aiming for

export const options = {
    stages: [
        { target: 250, duration: '2m' },
        { target: 100, duration: '1m' },
        { target: 0, duration: '1m' },
    ],
    thresholds: {
        http_reqs: ['count < 100000'],
    },
};


export default function () {
// our HTTP request, note that we are saving the response to res, which can be >
    const res = http.get('YOUR_URL_HERE');

    sleep(1);

    const checkRes = check(res, {
        'status is 200': (r) => r.status === 200
    });
}
