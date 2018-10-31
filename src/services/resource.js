import request from '@/utils/request';
import qs from 'qs';

export async function queryDataCenterItem(payload) {
  return request(`/api/resource/datacenter/?${qs.stringify(payload)}`)
}

export async function queryCabinetItem(payload) {
  return request(`/api/resource/cabinet/?${qs.stringify(payload)}`)
}

export async function create(payload) {
  return request(`/api/resource/datacenter/create/`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
