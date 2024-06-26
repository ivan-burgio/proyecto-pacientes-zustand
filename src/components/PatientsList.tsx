import { usePatientStore } from "../store/store"

export default function PatientsList() {
    const patients = usePatientStore(state => state.patients);

    return (
        <div>PatientsList</div>
    )
}
