// src/models/ApiResponseModels.ts

export interface TestsResponseModel {
    success: boolean;
    message: string;
    data: TestData;
}

export interface TestData {
    screen_test_taken: number;
    live_session_approved: number;
    waiting_for_tester_screening_approval: number;
    screener_test: any | null; // Adjust type based on actual screener_test data
    standard_tests: StandardTest[];
    standard_tests_done: number;
    three_minute_tests: any[]; // Adjust type if these are objects
    three_minute_tests_done: number;
    guerilla_tests: any[]; // Adjust type if these are objects
    mod_rut_tests: ModeratedTest[];
    mod_rut_taken_tests: any[]; // Adjust type if these are objects
}

export interface StandardTest {
    mod_rut_id: number | null;
    testsuite_id: number;
    testDuration: number;
    requirements: any | null; // Adjust type based on actual requirements data
    extra_requirements: string[];
    device_name: string;
    fee: number;
    test_type: string;
    os: string | null;
    camera: number;
}

export interface ModeratedTest {
    mod_rut_id: number | null;
    testsuite_id: number;
    testDuration: number;
    requirements: any | null; // Adjust type based on actual requirements data
    extra_requirements: string[];
    device_name: string;
    fee: number;
    test_type: string;
    os: string | null;
    camera: number;
}
